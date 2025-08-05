import React from 'react'
import { prisma } from '@/prisma/client';
import IssueTable from './IssueTable';
import delay from 'delay';

const IssuesPage = async () => {
    const issues = await prisma.issue.findMany();
    await delay(2000); // Simulating loading delay

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
