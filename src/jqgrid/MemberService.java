package jqgrid;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentSkipListMap;
import java.util.concurrent.atomic.AtomicInteger;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/member")
public class MemberService {
	
	public MemberService() {
		// TODO Auto-generated constructor stub
		System.out.println("1111111111111111111");
	}
	
	private MemberDAO dao;
    
    @Resource(name="MemberDao")
    public void setMemberDao(MemberDAO dao) {
		this.dao = dao;
    }

	@RequestMapping(method = GET)
	public
	@ResponseBody
	Page<Member> listMembers(
			@RequestParam(value = "page", required = false, defaultValue = "1") int page,
			@RequestParam(value = "rows", required = false, defaultValue = "20") int rows,
			@RequestParam(value = "sidx", required=false, defaultValue="memberId") String sidx,
			@RequestParam(value = "sord", required=false, defaultValue="sort") String sord) {
		System.out.println(page+":"+rows);
		System.out.println("size:"+dao.getTotalSize());
		
		final List<Member> membersList = dao.getMemberList(page, rows,sidx, sord);
		System.out.println("select size:"+membersList.size());
		int totalSize=dao.getTotalSize();
		int pageSize =0;
		if ( totalSize != 0 ) {
			if ( (totalSize % 10) == 0 ) {
				pageSize = ( totalSize / 10 );
			} else {
			pageSize = ( totalSize / 10 + 1);
			}
			}
		System.out.println("pageSize:"+pageSize);
		
		return new Page<Member>(membersList, page, totalSize,pageSize);
	}

	@RequestMapping(value="edit", method = POST)
	public 
	@ResponseBody
	StatusResponse editMember(){
		System.out.println("Server Edit....");
		return new StatusResponse(true);
	}

}
