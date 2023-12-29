const posts=[
    {   title:'Post One',body:'this is post one'},
    {   title:'Post Two',body:'THis is Post Two'}
];
function getPosts(){
    setTimeout(() => {
        let output=' ';
        posts.forEach(( post , index) => {
            output +=  `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
function createPosts(post,callback){
    setTimeout(() => {
       posts.push(post); 
       callback();
    },2000);
}
getPosts();
createPosts({title:'Post three',body:'This is Post three'},getPosts);
