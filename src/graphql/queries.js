import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
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
            }
        }
    }
`;

export const GET_AUTHORIZED_USER = gql`
    query {
        authorizedUser {
            username
        }
    }
`;