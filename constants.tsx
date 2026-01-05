
import React from 'react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'github',
    title: 'GitHub Profile',
    description: 'Explore my open-source contributions, repositories, and technical journey in software development.',
    url: 'https://github.com/Kyon9',
    icon: '💻',
    tags: ['Code', 'Open Source', 'Repositories'],
    color: 'from-gray-700 to-black'
  },
  {
    id: 'detective',
    title: 'AI Detective',
    description: 'An immersive mystery-solving experience powered by advanced artificial intelligence models.',
    url: 'https://detective.tanshuai.xyz',
    icon: '🕵️',
    tags: ['AI', 'Game', 'Mystery'],
    color: 'from-indigo-600 to-purple-800'
  },
  {
    id: 'newyearphoto',
    title: 'New Year Moments',
    description: 'A cherished collection of memories and photos from our cross-year gathering with friends.',
    url: 'https://newyearphoto.tanshuai.xyz',
    icon: '🎆',
    tags: ['Personal', 'Memories'],
    color: 'from-rose-500 to-orange-500'
  },
  {
    id: 'pokemon',
    title: 'Pokemon Battle Sim',
    description: 'Challenge the arena in this tactical simulation where you master the power of a competitive Sun team.',
    url: 'https://pokemon.tanshuai.xyz',
    icon: '☀️',
    tags: ['Strategy', 'Game', 'Pokémon'],
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 'huffman',
    title: 'Huffman Visualizer',
    description: 'An educational tool to visualize the Huffman coding algorithm for lossless data compression.',
    url: 'https://huffman.tanshuai.xyz',
    icon: '📦',
    tags: ['Algorithm', 'Education', 'CS'],
    color: 'from-emerald-500 to-teal-700'
  }
];

export const UI_STRINGS = {
  header: "Tanshuai's Hub",
  subHeader: "Curated collection of experimental web applications and personal projects.",
  footer: "© 2024 Tanshuai. Built with precision and curiosity.",
};
