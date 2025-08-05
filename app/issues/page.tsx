import { prisma } from '@/prisma/client';
import IssueTable from './IssueTable';

const IssuesPage = async () => {
    const issues = await prisma.issue.findMany();

    const serializedIssues = issues.map(issue => ({
        ...issue,
        createdAt: issue.createdAt.toISOString(),
        updatedAt: issue.updatedAt.toISOString(),
    }));

    return (
        <div>
            <IssueTable issues={serializedIssues} />
        </div>
    );
};

export default IssuesPage;
