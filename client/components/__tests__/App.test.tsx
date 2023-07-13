// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { renderRoute } from '../../test/utils'
import { screen, waitFor } from '@testing-library/react'

describe('User home page', () => {
  it('should have company slogan and logo in header', async () => {
    renderRoute('/')
    await waitFor(() => {
      expect(
        screen.queryByText(/WHILE YOU WORK, GROOVE YOURSELF TO EMPLOYMENT./i)
      ).toBeInTheDocument()

      const logoElement = screen.queryByAltText('Whistle Company Logo')
      expect(logoElement).toBeInTheDocument()
    })
  })

  it('footer navigations work to correct routes when clicked', async () => {
    renderRoute('/')
    await waitFor(() => {
      const facebookLink = screen.getByRole('link', { name: 'Facebook' })
      const instagramLink = screen.getByRole('link', { name: 'Instagram' })
      const linkedInLink = screen.getByRole('link', { name: 'LinkedIn' })
      const gitHubLink = screen.getByRole('link', { name: 'GitHub' })

      expect(facebookLink).toBeInTheDocument()
      expect(instagramLink).toBeInTheDocument()
      expect(linkedInLink).toBeInTheDocument()
      expect(gitHubLink).toBeInTheDocument()
    })
  })
})
