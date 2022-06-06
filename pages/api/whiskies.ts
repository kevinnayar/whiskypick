import type { NextApiRequest, NextApiResponse } from 'next';
import { getWhiskyList } from '../../utils/baseUtils';
import { WhiskyItem } from '../../types/baseTypes';

type Data = {
  whiskies: WhiskyItem[],
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    whiskies: getWhiskyList(),
  });
}
