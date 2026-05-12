"use client";
import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const AddBook = () => {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const addbook = Object.fromEntries(formData.entries());
    console.log(addbook);

    const res = await fetch("http://localhost:3001/api/books/add-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addbook),
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      toast.success("book added sucessfully");
      router.push("/all-books");
    }
  };
  return (
    <div className=" max-w-7xl mx-auto">
      <h1>Add Book</h1>
      <Card>
        <form onSubmit={onSubmit} className="p-10 space-y-8 w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Destination Name */}
            <div className="md:col-span-2">
              <TextField name="title" isRequired>
                <Label>Book Title</Label>
                <Input placeholder="Book title" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Country */}
            <TextField name="author" isRequired>
              <Label>Author</Label>
              <Input placeholder="Author name" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Category - Updated Select Component */}
            <div>
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label>Category</Label>
                <Select.Trigger className="rounded-2xl text-black">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item
                      id="Tech"
                      textValue="Beach"
                      className="text-black"
                    >
                      Tech
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Story"
                      textValue="Story"
                      className="text-black"
                    >
                      Story
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item
                      id="Science"
                      textValue="Science"
                      className="text-black"
                    >
                      Science
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Price */}
            <TextField name="available_quantity" type="number" isRequired>
              <Label>available_quantity</Label>
              <Input type="number" placeholder="1299" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Duration */}
            <TextField name="discount" isRequired>
              <Label>discount</Label>
              <Input placeholder="discount" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Image URL - Removed preview */}
            <div className="md:col-span-2">
              <TextField name="image_url" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Buttons */}

          <Button
            type="submit"
            variant="outline"
            // isLoading={isPending}
            className=" rounded-none w-full bg-cyan-500 text-white"
          >
            add book
            {/* {isPending ? "Adding Package..." : "Add Travel Package"} */}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddBook;
