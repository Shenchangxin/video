package com.scx.mapper;

import com.scx.my.mapper.MyMapper;
import com.scx.pojo.Comment;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentMapper extends MyMapper<Comment> {
}