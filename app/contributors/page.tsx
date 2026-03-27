import type { Metadata } from 'next';
import ContributorsPageClient from './ContributorsPageClient';

export const metadata: Metadata = {
  title: '贡献者 | Pyisland',
  description: 'Pyisland 贡献者列表。了解为 Python-island 项目贡献代码的团队成员。',
};

export default function Contributors() {
  return <ContributorsPageClient />;
}
