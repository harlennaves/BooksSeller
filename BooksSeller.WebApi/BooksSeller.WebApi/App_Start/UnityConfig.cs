using Microsoft.Practices.Unity;
using System.Web.Http;
using BooksSeller.WebApi.Providers;
using Unity.WebApi;

namespace BooksSeller.WebApi
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();
            
            
            container.RegisterType<IBooksProvider, BooksProvider>();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}