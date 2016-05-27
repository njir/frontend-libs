package jqgrid;

//add start --------------------------
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
//add end-------------------------
import java.util.ArrayList;
import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/member/scroll")
public class MemberServiceScroll {
	ArrayList<Member> membersList;
	public MemberServiceScroll() {
		// TODO Auto-generated constructor stub
		membersList=new ArrayList<Member>();
		for(int i=0;i<10000;i++){
			Member member=new Member(i, "memberId"+i, "pw"+i, "phone"+i, "email"+i, "address"+i, new Date(), "note"+i);
			membersList.add(member);
			
		}
	}
	


	@RequestMapping(method = GET)
	public
	@ResponseBody
	Page<Member> listMembers(
			@RequestParam(value = "page", required = false, defaultValue = "1") int page,
			@RequestParam(value = "rows", required = false, defaultValue = "10000") int rows,
			@RequestParam(value = "sidx", required=false, defaultValue="memberId") String sidx,
			@RequestParam(value = "sord", required=false, defaultValue="sort") String sord) {

		
		
		int totalSize=10000;
		int pageSize =0;
		if ( totalSize != 0 ) {
			if ( (totalSize % rows) == 0 ) {
				pageSize = ( totalSize / rows );
			} else {
			pageSize = ( totalSize / rows + 1);
			}
			}
		
		ArrayList<Member> resultList=new ArrayList<Member>();
		int startIndex=(page-1)*rows;
		int endIndex=(page*rows)-1;
		for(int i=startIndex;i<=endIndex;i++){
			resultList.add(membersList.get(i));
		}
			
		return new Page<Member>(resultList, page, totalSize,pageSize);
	}
//
//	@RequestMapping(value="edit", method = POST)
//	public 
//	@ResponseBody
//	StatusResponse editMember(){
//		System.out.println("Server Edit....");
//		return new StatusResponse(true);
//	}

}
