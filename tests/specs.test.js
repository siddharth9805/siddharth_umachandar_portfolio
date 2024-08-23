const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:8000';

// Expected constants
const expectedTitle = 'Siddharth Portfolio';
const expectedMenuItemCount = 8;
const expectedSkillsIcon=24
const expectedSocialLink = 5
const expectedExperience = 2
const expectedResumeButtonText = 'My resume';

test.beforeEach(async ({ page }) => {
  await page.goto(websiteURL);
});

test('1.Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

test('2.Check Navigation Menu in Header', async ({ page }) => {
  const menuItemCount = await page.locator('.nav .nav-item').count();
  expect(menuItemCount).toBe(expectedMenuItemCount);
});

test('3. Ensure hero-section loads', async ({ page }) => {
  await page.goto(websiteURL);
  const isVisible = await page.isVisible('#hero-link-1');
  expect(isVisible).toBe(true);
});

test('4. Ensure about section loads', async ({ page }) => {
  const isVisible = await page.isVisible('#about-link-1');
  expect(isVisible).toBe(true);
});

test('5. Ensure skills section loads with images', async ({ page }) => {
  const isVisible = await page.isVisible('#skills-link-1');
  expect(isVisible).toBe(true);
});

test('6. Ensure experience section loads with content', async ({ page }) => {
  const isVisible = await page.isVisible('#experience-link-1');
  expect(isVisible).toBe(true);
});

test('7. Ensure education section loads', async ({ page }) => {
  const isVisible = await page.isVisible('#education-link-1');
  expect(isVisible).toBe(true);
});

test('8. Ensure publication section loads', async ({ page }) => {
  const isVisible = await page.isVisible('#publication-link-1');
  expect(isVisible).toBe(true);
});

test('9. Ensure achievements section loads', async ({ page }) => {
  const isVisible = await page.isVisible('#achievements-link-1');
  expect(isVisible).toBe(true);
});

test('10. Ensure hero-section has welcome text', async ({ page }) => {
  const isVisible = await page.isVisible('.hero-tag');
  expect(isVisible).toBe(true);
});

test('11. Ensure about section has social media links', async ({ page }) => {
  const linksCount = await page.$$eval('.social-icons a', links => links.length);
  expect(linksCount).toBe(expectedSocialLink); // replace with the number of links you expect
});

test('12. Check skill section for tech stack images', async ({ page }) => {
  const imagesCount = await page.$$eval('.skill-item', images => images.length);  // assuming each tech image has a class of "tech-stack"
  expect(imagesCount).toBe(expectedSkillsIcon);  // replace 5 with the number you expect
});

test('13. Ensure experience section has multiple entries', async ({ page }) => {
  const entriesCount = await page.$$eval('.company-title', entries => entries.length);  // assuming each experience is an "entry"
  expect(entriesCount).toBe(expectedExperience);  // replace 2 with the number you expect
});

test('14. Ensure publication section lists titles', async ({ page }) => {
  const titlesCount = await page.$$eval('.publication-title', titles => titles.length);  // assuming each publication has a class of "title"
  expect(titlesCount).toBeGreaterThan(0);
});

test('15. Ensure achievements section has awards', async ({ page }) => {
  const awardsCount = await page.$$eval('.award', awards => awards.length);  // assuming each award has a class of "award"
  expect(awardsCount).toBeGreaterThan(0);
});

test('16. Check navigation to about section using nav bar', async ({ page }) => {
  await page.click('a#about-link-1'); // assuming navigation link to about section has an id of "about-link"
  expect(await page.url()).toContain('http://localhost:8000/#about');
});

test('17. Check navigation to skills section using nav bar', async ({ page }) => {
  await page.click('a#skills-link-1'); // assuming navigation link to skills section has an id of "skills-link"
  expect(await page.url()).toContain('http://localhost:8000/#skills');
});

test('18. Check navigation to experience section using nav bar', async ({ page }) => {
  await page.click('a#experience-link-1'); // assuming navigation link to experience section has an id of "experience-link"
  expect(await page.url()).toContain('http://localhost:8000/#experience');
});

test('19. Check navigation to education section using nav bar', async ({ page }) => {
  await page.click('a#education-link-1'); // assuming navigation link to education section has an id of "education-link"
  expect(await page.url()).toContain('http://localhost:8000/#education');
});

test('20. Check navigation to publications section using nav bar', async ({ page }) => {
  await page.click('a#publication-link-1'); // assuming navigation link to publications section has an id of "publications-link"
  expect(await page.url()).toContain('http://localhost:8000/#publication');
});

test('21. Check navigation to achievements section using nav bar', async ({ page }) => {
  await page.click('a#achievements-link-1'); // assuming navigation link to achievements section has an id of "achievements-link"
  expect(await page.url()).toContain('http://localhost:8000/#achievements');
});

test('22. Ensure footer is visible and contains copyright text', async ({ page }) => {
  const isVisible = await page.isVisible('.footer-container');
  expect(isVisible).toBe(true);
});

test('23. Check the availability of a download button in About section', async ({ page }) => {
  const isDownloadButtonVisible = await page.isVisible('.resume-style');  // Assuming you have a class "download-resume" for the download button
  expect(isDownloadButtonVisible).toBe(true);
});

test('24. Check the button text', async ({ page }) => {
  const text = await page.textContent('#about .resume-style');
  expect(text).toBe(expectedResumeButtonText)
});

test('25. Ensure smooth scrolling to sections', async ({ page }) => {
  await page.click('a#about-link-1');
  await page.waitForTimeout(1000); // Waiting for 1 second to ensure smooth scrolling
  expect(await page.url()).toContain('http://localhost:8000/#about');
});