import React, { Component } from 'react';
import './PostList.css'
import Post from '../Post'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
        },
        date: '04 Jun 2019',
        content: 'Texto é um conjunto de palavras e frases encadeadas que permitem interpretação e transmitem uma mensagem. É qualquer obra escrita em versão original e que constitui um livro ou um documento escrito. Um texto é uma unidade linguística de extensão superior à frase.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
            },
            content: "Algumas pessoas me pediram pra fazer users random, eu nao sou tão boa com isso porem dei o meu melhor, se vocês gostarem me avisem que eu faço mais ...",
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
            },
            content: "Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável. Wikipédia",
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://randomuser.me/api/portraits/men/80.jpg',
        },
        date: '04 Jun 2019',
        content: 'Texto é um conjunto de palavras e frases encadeadas que permitem interpretação e transmitem uma mensagem. É qualquer obra escrita em versão original e que constitui um livro ou um documento escrito. Um texto é uma unidade linguística de extensão superior à frase.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
            },
            content: "Algumas pessoas me pediram pra fazer users random, eu nao sou tão boa com isso porem dei o meu melhor, se vocês gostarem me avisem que eu faço mais ...",
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://randomuser.me/api/portraits/men/82.jpg',
            },
            content: "Em linguística, a noção de texto é ampla e ainda aberta a uma definição mais precisa. Grosso modo, pode ser entendido como manifestação linguística das ideias de um autor, que serão interpretadas pelo leitor de acordo com seus conhecimentos linguísticos e culturais. Seu tamanho é variável. Wikipédia",
          }
        ]
      }
    ]
  };

  render() {
    const {posts} = this.state;
    return (
      <div id="postList">
        {posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    )
  }
};

export default PostList;