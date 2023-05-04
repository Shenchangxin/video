package com.imooc.controller;

import com.imooc.base.BaseInfoProperties;
import com.imooc.bo.RegistLoginBO;
import com.imooc.grace.result.GraceJSONResult;
import com.imooc.grace.result.ResponseStatusEnum;
import com.imooc.pojo.Users;
import com.imooc.service.UserService;
import com.imooc.utils.IPUtil;
import com.imooc.utils.MyInfo;
import com.imooc.utils.SMSUtils;
import com.imooc.vo.UsersVO;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.UUID;

@Slf4j
@Api(tags = "PassportController 通信证接口模块")
@RequestMapping("passport")
@RestController
public class PassportController extends BaseInfoProperties {

    @Autowired
    private SMSUtils smsUtils;

    @Autowired
    private UserService userService;

    @PostMapping("getSMSCode")
    public GraceJSONResult getSMSCode(@RequestParam String mobile,
                                      HttpServletRequest request) throws Exception {

        if (StringUtils.isBlank(mobile)) {
            return GraceJSONResult.ok();
        }

        // 获得用户ip，
        String userIp = IPUtil.getRequestIp(request);
        // 根据用户ip进行限制，限制用户在60秒之内只能获得一次验证码
        redis.setnx60s(MOBILE_SMSCODE + ":" + userIp, userIp);

        String code = (int)((Math.random() * 9 + 1) * 100000) + "";
        smsUtils.sendSMS(MyInfo.getMobile(), code);
//        smsUtils.sendSMS(mobile, code);
        log.info(code);

        // 把验证码放入到redis中，用于后续的验证
        redis.set(MOBILE_SMSCODE + ":" + mobile, code, 30 * 60);

        return GraceJSONResult.ok();
    }

    @PostMapping("login")
    public GraceJSONResult login(@Valid @RequestBody RegistLoginBO registLoginBO,
//                                 BindingResult result,    // 对代码有侵入性
                                 HttpServletRequest request) throws Exception {

        String mobile = registLoginBO.getMobile();
        String code = registLoginBO.getSmsCode();

        // 1. 从redis中获得验证码进行校验是否匹配
        String redisCode = redis.get(MOBILE_SMSCODE + ":" + mobile);
        if (StringUtils.isBlank(redisCode) || !redisCode.equalsIgnoreCase(code)) {
            return GraceJSONResult.errorCustom(ResponseStatusEnum.SMS_CODE_ERROR);
        }

        // 2. 查询数据库，判断用户是否存在
        Users user = userService.queryMobileIsExist(mobile);
        if (user == null) {
            // 2.1 如果用户为空，表示没有注册过，则为null，需要注册信息入库
            user = userService.createUser(mobile);
        }

        // 3. 如果不为空，可以继续下方业务，可以保存用户会话信息
        String uToken = UUID.randomUUID().toString();
        redis.set(REDIS_USER_TOKEN + ":" + user.getId(), uToken);

        // 4. 用户登录注册成功以后，删除redis中的短信验证码
        redis.del(MOBILE_SMSCODE + ":" + mobile);

        // 5. 返回用户信息，包含token令牌
        UsersVO usersVO = new UsersVO();
        BeanUtils.copyProperties(user, usersVO);
        usersVO.setUserToken(uToken);

        return GraceJSONResult.ok(usersVO);
    }


    @PostMapping("logout")
    public GraceJSONResult logout(@RequestParam String userId,
                                  HttpServletRequest request) throws Exception {

        // 后端只需要清除用户的token信息即可，前端也需要清除，清除本地app中的用户信息和token会话信息
        redis.del(REDIS_USER_TOKEN + ":" + userId);

        return GraceJSONResult.ok();
    }


//    public Map<String, String> getErrors(BindingResult result) {
//        Map<String, String> map = new HashMap<>();
//        List<FieldError> errorList = result.getFieldErrors();
//        for (FieldError ff : errorList) {
//            // 错误所对应的属性字段名
//            String field = ff.getField();
//            // 错误的信息
//            String msg = ff.getDefaultMessage();
//            map.put(field, msg);
//        }
//        return map;
//    }
}
