package com.imooc.controller;

import com.imooc.base.BaseInfoProperties;
import com.imooc.bo.VlogBO;
import com.imooc.enums.YesOrNo;
import com.imooc.grace.result.GraceJSONResult;
import com.imooc.service.VlogService;
import com.imooc.utils.PagedGridResult;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@Api(tags = "VlogController 短视频相关业务功能的接口")
@RequestMapping("vlog")
@RestController
public class VlogController extends BaseInfoProperties {

    @Autowired
    private VlogService vlogService;

    //发布视频
    @PostMapping("publish")
    public GraceJSONResult publish(@RequestBody VlogBO vlogBO) {
        vlogService.createVlog(vlogBO);
        return GraceJSONResult.ok();
    }

    //查询vlog列表
    @GetMapping("indexList")
    public GraceJSONResult indexList(@RequestParam(defaultValue = "") String userId,
                                     @RequestParam(defaultValue = "") String search,
                                     @RequestParam Integer page,
                                     @RequestParam Integer pageSize) {

        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }

        PagedGridResult gridResult = vlogService.getIndexVlogList(userId, search, page, pageSize);
        return GraceJSONResult.ok(gridResult);
    }

    //查询vlog信息
    @GetMapping("detail")
    public GraceJSONResult detail(@RequestParam(defaultValue = "") String userId,
                                  @RequestParam String vlogId) {
        return GraceJSONResult.ok(vlogService.getVlogDetailById(userId, vlogId));
    }

    //设为私密视频
    @PostMapping("changeToPrivate")
    public GraceJSONResult changeToPrivate(@RequestParam String userId,
                                           @RequestParam String vlogId) {
        vlogService.changeToPrivateOrPublic(userId,
                                            vlogId,
                                            YesOrNo.YES.type);
        return GraceJSONResult.ok();
    }

    //设为公开视频
    @PostMapping("changeToPublic")
    public GraceJSONResult changeToPublic(@RequestParam String userId,
                                           @RequestParam String vlogId) {
        vlogService.changeToPrivateOrPublic(userId,
                vlogId,
                YesOrNo.NO.type);
        return GraceJSONResult.ok();
    }


    //我发布的视频列表
    @GetMapping("myPublicList")
    public GraceJSONResult myPublicList(@RequestParam String userId,
                                     @RequestParam Integer page,
                                     @RequestParam Integer pageSize) {

        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }

        PagedGridResult gridResult = vlogService.queryMyVlogList(userId,
                                                                page,
                                                                pageSize,
                                                                YesOrNo.NO.type);
        return GraceJSONResult.ok(gridResult);
    }

    //我的私密视频列表
    @GetMapping("myPrivateList")
    public GraceJSONResult myPrivateList(@RequestParam String userId,
                                        @RequestParam Integer page,
                                        @RequestParam Integer pageSize) {

        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }

        PagedGridResult gridResult = vlogService.queryMyVlogList(userId,
                page,
                pageSize,
                YesOrNo.YES.type);
        return GraceJSONResult.ok(gridResult);
    }

    //我的喜欢视频列表
    @GetMapping("myLikedList")
    public GraceJSONResult myLikedList(@RequestParam String userId,
                                         @RequestParam Integer page,
                                         @RequestParam Integer pageSize) {

        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }

        PagedGridResult gridResult = vlogService.getMyLikedVlogList(userId,
                                                                    page,
                                                                    pageSize);
        return GraceJSONResult.ok(gridResult);
    }

    //点赞视频
    @PostMapping("like")
    public GraceJSONResult like(@RequestParam String userId,
                                 @RequestParam String vlogerId,
                                 @RequestParam String vlogId) {

        // 我点赞的视频，关联关系保存到数据库
        vlogService.userLikeVlog(userId, vlogId);

        // 点赞后，视频和视频发布者的获赞都会 +1
        redis.increment(REDIS_VLOGER_BE_LIKED_COUNTS + ":" + vlogerId, 1);
        redis.increment(REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId, 1);

        // 我点赞的视频，需要在redis中保存关联关系
        redis.set(REDIS_USER_LIKE_VLOG + ":" + userId + ":" + vlogId, "1");

        return GraceJSONResult.ok();
    }

    //取消点赞
    @PostMapping("unlike")
    public GraceJSONResult unlike(@RequestParam String userId,
                                @RequestParam String vlogerId,
                                @RequestParam String vlogId) {

        // 我取消点赞的视频，关联关系删除
        vlogService.userUnLikeVlog(userId, vlogId);

        redis.decrement(REDIS_VLOGER_BE_LIKED_COUNTS + ":" + vlogerId, 1);
        redis.decrement(REDIS_VLOG_BE_LIKED_COUNTS + ":" + vlogId, 1);
        redis.del(REDIS_USER_LIKE_VLOG + ":" + userId + ":" + vlogId);

        return GraceJSONResult.ok();
    }

    //喜欢视频数量
    @PostMapping("totalLikedCounts")
    public GraceJSONResult totalLikedCounts(@RequestParam String vlogId) {
        return GraceJSONResult.ok(vlogService.getVlogBeLikedCounts(vlogId));
    }

    //查询我关注的博主发布的短视频列表
    @GetMapping("followList")
    public GraceJSONResult followList(@RequestParam String myId,
                                       @RequestParam Integer page,
                                       @RequestParam Integer pageSize) {

        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }

        PagedGridResult gridResult = vlogService.getMyFollowVlogList(myId,
                                                                    page,
                                                                    pageSize);
        return GraceJSONResult.ok(gridResult);
    }

    //查询朋友发布的短视频列表
    @GetMapping("friendList")
    public GraceJSONResult friendList(@RequestParam String myId,
                                      @RequestParam Integer page,
                                      @RequestParam Integer pageSize) {

        if (page == null) {
            page = COMMON_START_PAGE;
        }
        if (pageSize == null) {
            pageSize = COMMON_PAGE_SIZE;
        }

        PagedGridResult gridResult = vlogService.getMyFriendVlogList(myId,
                                                                    page,
                                                                    pageSize);
        return GraceJSONResult.ok(gridResult);
    }
}
