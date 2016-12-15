using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Dependencies;
using System.Web.Mvc;
using BooksSeller.WebApi.Models;


namespace BooksSeller.WebApi.App_Start
{
    public class WebApiConfig
    {
        public static void Configure(HttpConfiguration config)
        {
            UnityConfig.RegisterComponents();

            var enableCorsAttribute = new EnableCorsAttribute("*",
                                               "*",
                                               "*");
            config.EnableCors(enableCorsAttribute);

            config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "Default",
            //    routeTemplate: "api/{controller}/{code}",
            //    defaults: new { code = RouteParameter.Optional }
            //);

        }
    }
}