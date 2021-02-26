import { gql } from 'graphql-request';

export const GET_ALL_PROJECTS = gql`
  query getProjects {
    projects {
      id
      images {
        url
      }
      links
      skills
      slug
      title
      description {
        text
      }
    }
  }
`;
