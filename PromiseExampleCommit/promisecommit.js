
function createPost(post) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
      
        resolve(post);
      }, 1000);
    });
  }
  

  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const lastActivityTime = new Date().toISOString();
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  

  function deletePost(postId) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {

        resolve(`Post ${postId} deleted`);
      }, 1000);
    });
  }
  

  async function main() {
    try {
      const post = { id: 1, content: 'Post 1' };
  
    
      const [createdPost, lastActivityTime] = await Promise.all([
        createPost(post),
        updateLastUserActivityTime(),
      ]);
  
  
     
      console.log('Posts:', [createdPost]);
      console.log('Before post Time:', lastActivityTime);
  
      
      const deletionResult = await deletePost(createdPost.id);
      console.log(deletionResult);
      console.log('Last Activity Time:', lastActivityTime);
     
      console.log('Remaining Posts:', []);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
 
  main();
  