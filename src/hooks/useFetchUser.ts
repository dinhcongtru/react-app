import { useEffect, useState } from 'react';
import { userApi } from '@services/apis/user';
import type { User } from '@services/types/user';

export const useFetchUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await userApi.getUsers();
        setUsers(res as User[]);
      } catch (error) {
        console.log('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  return { users, loading };
};

export const useFetchUserById = (id: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const res = await userApi.getUserById(id);
        setUser(res as User);
      } catch (error) {
        console.log('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);
  return { user, loading };
};
