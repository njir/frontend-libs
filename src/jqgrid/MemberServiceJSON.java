package jqgrid;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import javax.annotation.Resource;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;



@Controller
@RequestMapping(value = "/member/json")
public class MemberServiceJSON {

	public MemberServiceJSON() {
		// TODO Auto-generated constructor stub
		System.out.println("2222222222222");
	}

	private MemberDAO dao;

	@Resource(name = "MemberDao")
	public void setLoginDao(MemberDAO dao) {
		this.dao = dao;
	}

	@RequestMapping(method = GET,produces="application/json")
	public @ResponseBody
	Page<Member> getShopInJSON(
			@RequestParam(value = "page", required = false, defaultValue = "1") int page,
			@RequestParam(value = "rows", required = false, defaultValue = "20") int rows,
			@RequestParam(value = "sidx", required=false, defaultValue="memberId") String sidx,
			@RequestParam(value = "sord", required=false, defaultValue="sort") String sord) {

		final List<Member> membersList = dao.getMemberList(1, 10, null, null);
		System.out.println("select size11:" + membersList.size());
		int totalSize = dao.getTotalSize();
		int pageSize = 0;
		if (totalSize != 0) {
			if ((totalSize % 10) == 0) {
				pageSize = (totalSize / 10);
			} else {
				pageSize = (totalSize / 10 + 1);
			}
		}
		System.out.println("pageSize:" + pageSize);
		return new Page<Member>(membersList, 1, totalSize,pageSize);

	}

}
