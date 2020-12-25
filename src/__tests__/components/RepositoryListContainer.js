import React from 'react';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          pageInfo: {
            totalCount: 8,
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
  
        // Add your test code here
        const {  getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

        expect(getAllByTestId("repoName")[0]).toHaveTextContent("jaredpalmer/formik");
        expect(getAllByTestId("repoDesc")[0]).toHaveTextContent("Build forms in React, without the tears");
        expect(getAllByTestId("repoLang")[0]).toHaveTextContent("TypeScript");
        expect(getAllByTestId("repoRating")[0]).toHaveTextContent("88");
        expect(getAllByTestId("repoStars")[0]).toHaveTextContent("21.9k");
        expect(getAllByTestId("repoForks")[0]).toHaveTextContent("1.6k");
        expect(getAllByTestId("repoReviews")[0]).toHaveTextContent("3");

        expect(getAllByTestId("repoName")[1]).toHaveTextContent("async-library/react-async");
        expect(getAllByTestId("repoDesc")[1]).toHaveTextContent("Flexible promise-based React data loader");
        expect(getAllByTestId("repoLang")[1]).toHaveTextContent("JavaScript");
        expect(getAllByTestId("repoRating")[1]).toHaveTextContent("72");
        expect(getAllByTestId("repoStars")[1]).toHaveTextContent("1.8k");
        expect(getAllByTestId("repoForks")[1]).toHaveTextContent("69");
        expect(getAllByTestId("repoReviews")[1]).toHaveTextContent("3");
      });
    });
  });