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

export const GET_PROJECT = gql`
  query getProject($slug: String!) {
    project(where: { slug: $slug }) {
      description {
        text
      }
      projectDescription
      id
      images {
        url
      }
      links
      skills
      slug
      title
    }
  }
`;
