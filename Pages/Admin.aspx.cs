
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
    public partial class Admin : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!(bool)Session["Admin"])
            {
                Response.Redirect("Home.aspx");
            }

            if (!IsPostBack)
            {
                string SQLStr = "SELECT * FROM tblUsers";
                DataSet ds = RetrieveUsersTable(SQLStr);
                DataTable dt = ds.Tables["tblUsers"];
                string table = BuildUsersTable(dt);
                //tableDiv.Style["border"] = "2px solid black";
                tableDiv.InnerHtml = table;

            }
        }

        public DataSet RetrieveUsersTable(string SQLStr)
        {
            // connect to DataBase
            string connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\Users.mdf;Integrated Security=True";

            SqlConnection con = new SqlConnection(connectionString);

            // Build SQL Query
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = SQLStr;
            cmd.Connection = con;
            //SqlCommand cmd = new SqlCommand(SQLStr, con);

            // Build DataAdapter
            SqlDataAdapter ad = new SqlDataAdapter(cmd);

            // Build DataSet to store the data
            DataSet ds = new DataSet();

            // Get Data form DataBase into the DataSet
            //con.Open();
            ad.Fill(ds, "tblUsers");
            //con.Close();

            return ds;
        }


        public string BuildUsersTable(DataTable dt)
        {
            string str = "<table class='usersTable' align='center' border='3px solid black'>";
            str += "<tr>";
            foreach (DataColumn column in dt.Columns)
            {
                str += "<td>" + column.ColumnName + "</td>";
            }

            foreach (DataRow row in dt.Rows)
            {
                str += "<tr>";
                foreach (DataColumn column in dt.Columns)
                {
                    str += "<td>" + row[column] + "</td>";
                }
                str += "</tr>";
            }
            str += "</tr>";
            str += "</table>";
            return str;
        }

    }
}

