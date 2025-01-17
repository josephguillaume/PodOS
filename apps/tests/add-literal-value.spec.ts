import { expect, test } from "@playwright/test";
import { Credentials, signIn } from "./actions/signIn";

const alice: Credentials = {
  email: "alice@mail.example",
  password: "alice",
};

test("can add a literal value", async ({ page }) => {
  // when opening PodOS Browser
  await page.goto("/");

  // and navigating to a generic resource
  const navigationBar = page.getByPlaceholder("Enter URI");
  await navigationBar.fill(
    "http://localhost:4000/alice/public/generic/resource#it"
  );
  await navigationBar.press("Enter");

  // then I cannot see any input to add literal values
  const missingAddLiteralField = page.getByPlaceholder("Add literal");
  await expect(missingAddLiteralField).not.toBeVisible();

  // when signing in as the pod owner
  await signIn(page, alice);

  // then I can see an input to add literal values
  const addLiteralField = page.getByPlaceholder("Add literal");
  await expect(addLiteralField).toBeVisible();

  // when I select a term
  await addLiteralField.type("https://property.example");
  await addLiteralField.press("Tab");

  // and enter a value
  await page.keyboard.type("my literal value", { delay: 100 });
  await page.keyboard.press("Enter");

  // then the new literal & value show up in the list of literals
  const newItem = page
    .locator("pos-literals")
    .getByRole("group")
    .filter({ hasText: "https://property.example" });
  await expect(newItem).toContainText("my literal value");
});
