
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LItanProject.Pages
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Users.mdf;Integrated Security=True";
                SqlConnection con = new SqlConnection(connectionString);

                string SQLStr = $"SELECT * FROM tblUsers WHERE 0=1";
                SqlCommand cmd = new SqlCommand(SQLStr, con);

                DataSet ds = new DataSet();


                SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                adapter.Fill(ds, "tblUsers");


                DataRow dr = ds.Tables["tblUsers"].NewRow();
                dr["FirstName"] = Request.Form["FirstName"];
                dr["LastName"] = Request.Form["LastName"];
                dr["UserName"] = Request.Form["UserName"];
                dr["Password"] = Request.Form["Password"];
                dr["Admin"] = false;

                dr["Age"] = int.Parse(Request.Form["Age"]);
                dr["Email"] = Request.Form["Email"];

                dr["Gender"] = Request.Form["Gender"];


                string selectSQL = $"SELECT Firstname FROM tblUsers " +
                  $"WHERE UserName='{Request.Form["UserName"]}' OR Password = '{Request.Form["Password"]}'";

                SqlCommand selectCmd = new SqlCommand(selectSQL, con);
                con.Open();
                object scalar = selectCmd.ExecuteScalar();
                if (scalar != null)
                {
                    regError.InnerHtml = "Invalid Username or Password, Choose Different Ones";
                }
                else
                {
                    ds.Tables["tblUsers"].Rows.Add(dr);


                    SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
                    adapter.UpdateCommand = builder.GetInsertCommand();
                    adapter.Update(ds, "tblUsers");

                    Response.Redirect("Home.aspx");
                }
                con.Close();
            }


        }
    }
}