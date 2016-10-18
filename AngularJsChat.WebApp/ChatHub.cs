using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace AngularJsChat.WebApp
{
    public class ChatHub : Hub
    {
        public void Send(String userId, string userName, DateTime date, string text)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage(userId, userName, date, text);
        }
    }
}