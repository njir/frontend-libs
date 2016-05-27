package jqgrid;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Member {
	private int id;
	private String memberId;
	private String pw;
	private String phone;
	private String email;
	private String address;
	private Date regDate;
	private String note;
	
	
	public Member() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	public Member(int id, String memberId, String pw, String phone,
			String email, String address, Date regDate, String note) {
		super();
		this.id = id;
		this.memberId = memberId;
		this.pw = pw;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.regDate = regDate;
		this.note = note;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getMemberId() {
		return memberId;
	}


	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}


	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	
	

}
