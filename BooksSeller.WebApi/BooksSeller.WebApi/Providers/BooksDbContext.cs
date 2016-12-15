using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Data.SQLite;
using System.Linq;
using System.Web;
using BooksSeller.WebApi.Models;
using SQLite.CodeFirst;

namespace BooksSeller.WebApi.Providers
{
    public class BooksDbContext : DbContext
    {

        #region Attributes

        private string _dbPath;

        #endregion

        #region Properties

        public DbSet<Book> Books { get; set; }

        #endregion

        #region Constructors

        public BooksDbContext(string path)
			: base(new SQLiteConnection
			{
				ConnectionString = new SQLiteConnectionStringBuilder
				{
					DataSource = path,
					ForeignKeys = true,
					BinaryGUID = false,
				}.ConnectionString
			}, true)
		{
            _dbPath = path;
            Database.Log = Console.Write;
        }

        #endregion

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Configurations.Add(new BookModelConfiguration());
            
           
            var sqliteConnectionInitializer = new SqliteCreateDatabaseIfNotExists<BooksDbContext>(modelBuilder);
            Database.SetInitializer(sqliteConnectionInitializer);
        }


    }

    public class BookModelConfiguration : EntityTypeConfiguration<Book>
    {
        public BookModelConfiguration()
        {
            HasKey(t => t.Code);

            // Properties
            Property(t => t.Code)
                .IsRequired()
                .HasMaxLength(8);

            Property(t => t.Price)
                .IsRequired();
                

            Property(t => t.ReleaseDate)
                .IsRequired();

            Property(t => t.Title)
                .IsRequired();


            // Table & Column Mappings
            ToTable("Books");
            Property(t => t.Code).HasColumnName("Code");
            Property(t => t.Price).HasColumnName("Price");
            Property(t => t.ReleaseDate).HasColumnName("ReleaseDate");
            Property(t => t.Title).HasColumnName("Title");
        }
    }
}