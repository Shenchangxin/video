package com.scx.service;

import com.scx.bo.CommentBO;
import com.scx.pojo.Comment;
import com.scx.utils.PagedGridResult;
import com.scx.vo.CommentVO;

public interface CommentService {

    /**
     * 发表评论
     */
    public CommentVO createComment(CommentBO commentBO);

    /**
     * 查询评论的列表
     */
    public PagedGridResult queryVlogComments(String vlogId,
                                             String userId,
                                             Integer page,
                                             Integer pageSize);

    /**
     * 删除评论
     */
    public void deleteComment(String commentUserId,
                              String commentId,
                              String vlogId);

    /**
     * 根据主键查询comment
     */
    public Comment getComment(String id);
}
