package com.imooc.controller;

import com.imooc.grace.result.GraceJSONResult;
import com.imooc.grace.result.ResponseStatusEnum;
import com.imooc.model.Stu;
import com.imooc.utils.SMSUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Api(tags = "Hello 测试的接口")
@RestController
public class HelloController {

    @ApiOperation(value = "hello - 这是一个hello的测试路由")
    @GetMapping("hello")
    public Object hello() {

        Stu stu = new Stu("imooc", 18);
        log.debug(stu.toString());
        log.info(stu.toString());
        log.warn(stu.toString());
        log.error(stu.toString());

        return GraceJSONResult.ok(stu);
//        return GraceJSONResult.errorCustom(ResponseStatusEnum.SYSTEM_ERROR_GLOBAL);
//        return GraceJSONResult.ok("Hello SpringBoot~");
    }

    @Autowired
    private SMSUtils smsUtils;

    @GetMapping("sms")
    public Object sms() throws Exception {

        String code = "123456";
        smsUtils.sendSMS("", code);

        return GraceJSONResult.ok();
    }
}
