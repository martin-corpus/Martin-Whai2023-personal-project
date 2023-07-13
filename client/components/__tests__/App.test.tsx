// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
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

  it.todo('footer navigation to the correct routes when clicked', async () => {
    renderRoute('/')
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
    })

    const playPianoLink = screen.getByRole('link', { name: 'Play Piano' })
    const becomeASingerLink = screen.getByRole('link', {
      name: 'Become A Singer',
    })
    const playgroundLink = screen.getByRole('link', { name: 'Playground' })

    expect(playPianoLink.getAttribute('href')).toBe('/WhaiPiano')
    expect(becomeASingerLink.getAttribute('href')).toBe('/BecomeASinger')
    expect(playgroundLink.getAttribute('href')).toBe('/Playground')
  })
})
