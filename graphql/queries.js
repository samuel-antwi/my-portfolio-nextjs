import { gql } from 'graphql-request'

export const GET_ALL_PROJECTS = gql`
  query getProjects {
    projects(orderBy: rank_ASC) {
      id
      images {
        url
        height
        width
      }
      links
      skills
      slug
      title
      projectDescription
    }
  }
`

export const GET_PROJECT = gql`
  query getProject($slug: String!) {
    project(where: { slug: $slug }) {
      projectDescription

      id
      links
      images {
        url
        height
        width
      }
      links
      skills
      slug
      title
    }
  }
`
