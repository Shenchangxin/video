package com.scx.controller;

import com.scx.MinIOConfig;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Api(tags = "FileController 文件上传测试的接口")
@RestController
public class FileController {

    @Autowired
    private MinIOConfig minIOConfig;

//    @PostMapping("upload")
//    public GraceJSONResult upload(MultipartFile file) throws Exception {
//
//        String fileName = file.getOriginalFilename();
//
//        MinIOUtils.uploadFile(minIOConfig.getBucketName(),
//                              fileName,
//                              file.getInputStream());
//
//        String imgUrl = minIOConfig.getFileHost()
//                        + "/"
//                        + minIOConfig.getBucketName()
//                        + "/"
//                        + fileName;
//
//        return GraceJSONResult.ok(imgUrl);
//    }
}
