package upload;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Path;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

@Controller
@RequestMapping(value = "/upload")
public class UploadService {


	@RequestMapping(value = "/upload", method = { RequestMethod.POST,
			RequestMethod.GET },produces="application/json")
	public @ResponseBody Status upload(HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		System.out.println("1111111111111111111");
		request.setCharacterEncoding("euc-kr");
		
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		String name=multipartRequest.getParameter("name");
		System.out.println("name:"+name);
		MultiValueMap<String, MultipartFile> map = multipartRequest
				.getMultiFileMap();
		
		
		
		
		String[] files=null;
		if (map != null) {
			Iterator iter = map.keySet().iterator();
			while (iter.hasNext()) {
				String str = (String) iter.next();
				List<MultipartFile> fileList = map.get(str);
				
				//add------------
				int size=fileList.size();
				files=new String[size];
				int count=0;
				
				for (MultipartFile mpf : fileList) {
					files[count]=mpf.getOriginalFilename();
					
					File localFile = new File("c:\\upload\\"
							+ StringUtils.trimAllWhitespace(mpf.getOriginalFilename()));
					System.out.println(mpf.getOriginalFilename());
					OutputStream out = new FileOutputStream(localFile);
					out.write(mpf.getBytes());
					out.close();
					
					count++;
				}
			}
		}
		
		
		
		return new Status(200, files);
		
		

	}


}
