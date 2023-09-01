import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient() ;

const populatePost = [
    {
        title: "this is my first title",
        published : true,
        creatorId: 1
    },
    {
        title: "this is my second title",
        published : false,
        creatorId: 1
    },
    {
        title: "this is my third title",
        published : true,
        creatorId: 1
    },
    {
        title: "this is my fourth title",
        published : false,
        creatorId: 1
    }
] ;

const populateCategory = [
    { 
        title: "first category",
        description: "this is first category"
    },
    { 
        title: "second category",
        description: "this is second category"
    },
    { 
        title: "third category",
        description: "this is third category"
    },
    { 
        title: "fourth category",
        description: "this is fourth category"
    }

] ;

//  function to automatically populate the database
async function autopopulateDatabase() {

    // make sure no data exist in the tables before seeding
    await prisma.$queryRaw`TRUNCATE TABLE "User", "Post", "Category", "_CategoryToPost" RESTART IDENTITY`;
    console.log("all tables empty");

    const user = await prisma.user.createMany(
        {data:   [
            {
                email: "famaths01234@gmail.com",
                name:  "jamiu fawaz",
                role:  "Admin"
            },
            {
                email: "careers@schoolinka@gmail.com",
                name:  "Human Resources",
                role:  "Admin"
            },
            {
                email: "jamiufawazishola@gmail.com",
                name:  "jamiu fawaz Ishola",
                role:  "User"
            },
            {
                email: "myfriend@gmail.com",
                name:  "My Friend",
                role:  "User"
            }
        
        ]},
        
    );
  
    const post = await prisma.post.createMany(
        {data:  populatePost}
    );

    const category = await prisma.category.createMany(
        {data:  populateCategory}
    );

    console.log(" database successfully seeded ");

    
}

autopopulateDatabase()
  .catch((e) => {
    console.log(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});