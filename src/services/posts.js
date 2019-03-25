
import {httpService} from './HttpService';


export default class Posts {
  // list() {
  //   return cars;
  // }

  getAll(){
    return httpService.get('/posts');
}

  create (post){
    return httpService.post('/posts',post);
  }

  get(id){
    return httpService.get(`posts/${id}`);
}

  edit(post) {
    return httpService.put(`posts/${post.id}`, post)
    }

  remove(id) {
      return httpService.delete(`posts/${id}`)
    }
  
  addComment (post,comment) {
    return httpService.post(`/posts/${post.id}/comments`,comment)
  }

}

export const posts = new Posts();