package jqgrid;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;


@Repository("MemberDao")
public class MemberDAO {
	private JdbcTemplate jdbcTemplate;

	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}

	public int getTotalSize() {
		String sql = "select count(*) from TB_MEMBER";
		return jdbcTemplate.queryForInt(sql);
	}

	public List<Member> getMemberList(int page, int max, String sidx,
			String sort) {
		System.out.println("MemberDAO:getMemberList");
		int startIdx = (page - 1) * max + 1;
		int endIdx = startIdx + max;
		String sql = "";
		if (sidx != null && !sidx.equals("") && sort != null && !sort.equals("")) {
			sql = "SELECT * FROM (SELECT ROWNUM AS NUM, ID,MEMBERID, PW, PHONE, EMAIL, ADDRESS, REGDATE, NOTE FROM (SELECT * FROM  TB_MEMBER ORDER BY "
					+ sidx
					+ " "
					+ sort
					+ "  ) ) WHERE NUM >= "
					+ startIdx
					+ " AND NUM < " + endIdx;
		} else {
			sql = "SELECT * FROM (SELECT ROWNUM AS NUM, ID,MEMBERID, PW, PHONE, EMAIL, ADDRESS, REGDATE, NOTE FROM (SELECT * FROM  TB_MEMBER  ) ) WHERE NUM >= "
					+ startIdx
					+ " AND NUM < " + endIdx;
		}
		List<Member> list = null;
		try {
			list = jdbcTemplate.query(sql, new MemberRowMapper());
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	class MemberRowMapper implements RowMapper<Member> {

		public Member mapRow(ResultSet rs, int rowNum) throws SQLException {
			// TODO Auto-generated method stub
			Member user = new Member();
			user.setId(rs.getInt("ID"));
			user.setMemberId(rs.getString("MEMBERID"));
			user.setPw(rs.getString("PW"));
			user.setPhone(rs.getString("PHONE"));
			user.setEmail(rs.getString("EMAIL"));
			user.setAddress(rs.getString("ADDRESS"));
			user.setRegDate(rs.getDate("REGDATE"));
			user.setNote(rs.getString("NOTE"));
			return user;
		}

	}

}
