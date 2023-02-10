import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const config = {
  host: process.env.POSTGRES_HOST ?? 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DATABASE ?? 'englishcenter_management',
  user: process.env.POSTGRES_USER ?? 'postgres',
  password: process.env.POSTGRES_PASSWORD ?? 'postgres123',
}

export const client = new Client(config);

client.connect((err: any) => {
  if (err) {
    console.error('Failed to connect to database:', err.stack);
  } else {
    console.log('🟢 Successfully connected to database');
  }
});

export async function executeQuery(sqlQuery: string, params: any[]) {
  const query = await client.query(sqlQuery, params);
  console.log("Executed query successfully!")
};

export  async function getAll(sqlQuery: string) {
  try{
    const query= await client.query(sqlQuery)
    return query.rows;
  }
  catch(e){
    console.log("Query fail: ",e)
    return []
  }
};

export async function getOne(sqlQuery: string,params: any[]) {
  try{
    const query= await client.query(sqlQuery,params)
    return query.rows[0];
  }
  catch(e){
    console.log("Query fail: ",e)
  }
};