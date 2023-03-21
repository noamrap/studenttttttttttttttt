<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="LItanProject.Pages.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="../css/Login.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

<div class="login-container">
        <div class="login-form">

            <table style="border-spacing: 10px;">
                <tr>
                    <td>
                        <asp:Label ID="lblUserName" runat="server" Text="Username:"></asp:Label>
                    </td>
                    <td>
                        <input id="UserName" type="text" name="UserName" oninput="getUserVal()" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <asp:Label ID="lblPassword" runat="server" Text="Password:"></asp:Label>
                    </td>
                    <td>
                        <input id="Password" type="Password" name="Password" oninput="getPassVal()" />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="submit" id="submit" name="Login" class="btn-login" value="Login" />
                    </td>
                </tr>

            </table>

        </div>

        <div class="error-container">
            <p id="errMsg" runat="server" class="errMsg"></p>
        </div>
    </div>




</asp:Content>

