package com.scx.mapper;

import com.scx.my.mapper.MyMapper;
import com.scx.pojo.Users;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersMapper extends MyMapper<Users> {
}