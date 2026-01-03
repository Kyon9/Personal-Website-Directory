
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
    id: 'pokemon',
    title: 'PokeDex Hub',
    description: 'A comprehensive visual database for Pokémon enthusiasts, featuring detailed stats and evolutions.',
    url: 'https://pokemon.tanshuai.xyz',
    icon: '⚡',
    tags: ['Utility', 'Data', 'Gaming'],
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
