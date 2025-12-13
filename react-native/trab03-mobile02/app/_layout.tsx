import { Stack } from 'expo-router/stack';
import { useEffect } from 'react';
import { SQLiteProvider } from 'expo-sqlite'; 
import { Crud } from '../banco/crud';  

export default function Layout() {
    useEffect(() => {
        Crud();
      }, []);
    
      return (
        <SQLiteProvider databaseName="sistema.db">
          <Stack />
        </SQLiteProvider>
      );
}