import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserList } from '../../utils/baseUtils';
import { User } from '../../types/baseTypes';

type Data = {
  users: User[],
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    users: getUserList(),
  });
}
