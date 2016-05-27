package upload;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Status {
	private int status;
	private String[] files;
	public Status(int status, String[] files) {
		super();
		this.status = status;
		this.files = files;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String[] getFiles() {
		return files;
	}
	public void setFiles(String[] files) {
		this.files = files;
	}
	
}
