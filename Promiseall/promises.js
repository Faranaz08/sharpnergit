const posts=[
    {   title:'Post One',body:'this is post one'},
    {   title:'Post Two',body:'THis is Post Two'}
];
function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post,index) =>{
            output+=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;
    },1000);
}
function createPosts(post){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong')
            }
        },2000);
    });

}
// createPosts({title:'Post three',body:'This is Post three'},getPosts)
//     .then(getPosts)
//     .catch(err => console.log(err));

    //Promise.all
const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3=new Promise((resolve,reject) => 
setTimeout(resolve,2000,'GoodBye'));
const promise4=fetch('')
Promise.all([promise1,promise2,promise3]).then((values) => console.log());