package upload;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 * Servlet implementation class UploadServlet
 */
public class UploadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UploadServlet() {
        super();
        // TODO Auto-generated constructor stub
        System.out.println("UploadServelt.............");
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("doPost................");
		request.setCharacterEncoding("euc-kr");
		try {
			
		
		DiskFileItemFactory factory = new DiskFileItemFactory(); 
		ServletFileUpload upload = new ServletFileUpload(factory);    
		upload.setHeaderEncoding("UTF-8");
		  upload.setSizeMax(10 * 1024 * 1024);                                                             //최대 파일 크기(10M)
		  List<FileItem> items = upload.parseRequest(request);

		
		String[] files=null;
			Iterator iter = items.iterator();
			while (iter.hasNext()) {
				FileItem fileItem = (FileItem) iter.next();      
				if(!fileItem.isFormField()){    
					String fieldName=fileItem.getFieldName();
				     String fileName=fileItem.getName();
				     String contentType=fileItem.getContentType();
				     boolean isInMemory=fileItem.isInMemory();
				     long sizeInBytes=fileItem.getSize();
				     
				     System.out.println(fieldName+":"+fileName+":"+contentType+":");
				     
				    
				      File uploadedFile=new File("c:\\upload\\"+ fileName);                                                   //실제 디렉토리에 fileName으로 카피 된다.
				      fileItem.write(uploadedFile);
				      fileItem.delete();                                                                                            //카피 완료후 temp폴더의 temp파일을 제거
				     
				}
				
			}
			
		} catch (Exception e) {
			// TODO: handle exception
		}
	

		

		
		PrintWriter out=response.getWriter();
		String result="{\\\"status\\\":200,\\\"files\\\":[\\\"Desert.jpg\\\"]}";
		out.write(result);
	}

}
