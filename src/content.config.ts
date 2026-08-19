import { glob } from 'astro/loaders';


import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // ... 其他設定
  schema: z.object({
    title: z.string(),
    // 1. 允許 description 為 optional (選填)，或提供預設值
    description: z.string().optional().default(''), 
    
    // 2. 使用 z.coerce.date() 自動將各種格式轉換為標準 Date 物件
    pubDate: z.coerce.date(), 
    
    // 其他欄位如 heroImage 等...
  }),
});

export const collections = { blog };

