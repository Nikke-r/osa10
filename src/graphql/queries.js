import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
    query repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $searchKeyword: String) {
        repositories(
            orderDirection: $orderDirection
            orderBy: $orderBy
            searchKeyword: $searchKeyword
        ) {
            edges {
                node {
                    id,
                    fullName,
                    description,
                    language,
                    ratingAverage,
                    stargazersCount,
                    forksCount,
                    reviewCount,
                    ownerAvatarUrl,
                }
                cursor
            }
            pageInfo {
                hasNextPage
                endCursor
                startCursor
                totalCount
            }
        }
    }
`;

export const GET_REPOSITORY_DETAILS = gql`
    query repository($id: ID!, $first: Int, $after: String) {
        repository(
            id: $id
        ) {
            id,
            fullName,
            description,
            language,
            ratingAverage,
            stargazersCount,
            forksCount,
            reviewCount,
            ownerAvatarUrl,
            url
            reviews(
                first: $first
                after: $after
            ) {
                edges {
                    node {
                        id
                        createdAt
                        text
                        rating
                        user {
                            username
                        }
                    }
                }
                pageInfo {
                    hasNextPage
                    startCursor
                    endCursor
                    totalCount
                  }
            }
        }
    }
`;

export const GET_AUTHORIZED_USER = gql`
    query authorizedUser($includeReviews: Boolean = false) {
        authorizedUser {
            username
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        id
                        rating
                        text
                        createdAt
                        repository {
                            id
                            fullName
                        }
                    }
                }
                pageInfo {
                    hasNextPage
                    startCursor
                    endCursor
                    totalCount
                }
            }
        }
    }
`;