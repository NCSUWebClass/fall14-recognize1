package edu.ncsu.actions;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;

@WebServlet("/GetQuestionAction")
public class GetQuestionAction extends HttpServlet{
	private static final long serialVersionUID = 1L;
	
	public GetQuestionAction () {
		super();
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			Connection connection = null;
			int qID = Integer.parseInt(request.getParameter("qID"));
			connection = DriverManager.getConnection(
				"jdbc:oracle:thin:@104.131.104.197:3306:recognition","root","Recognition1");
			ArrayList<String> question = new ArrayList<String>();
			//Update settings with new values
			//Not tested yet
			PreparedStatement stmt = connection.prepareCall("SELECT * FROM questions ORDER WHERE qID = ?");
	
			stmt.setInt(1, qID);

			stmt.execute();
			

			ResultSet rs = stmt.executeQuery();
			while(rs.next()) {
				question.add(rs.getString("image1"));
				question.add(rs.getString("image2"));
				question.add(rs.getString("image3"));
				question.add(rs.getString("image4"));
				question.add(rs.getString("image5"));
				question.add(rs.getString("image6"));
			}

			Gson gson = new Gson();
			JsonElement element = gson.toJsonTree(question, new TypeToken<List<String>>() {}.getType());
			
			JsonArray jsonArray = element.getAsJsonArray();
			response.setContentType("application/json");
			response.getWriter().print(jsonArray);
			
			
			connection.close();
		}
		catch(ClassNotFoundException e) {
			e.printStackTrace();
			System.out.println("Cannot find driver.");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

