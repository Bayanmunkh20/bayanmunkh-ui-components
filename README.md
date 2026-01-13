# bayanmunkh-ui-components

Дахин ашиглагдах React UI бүрэлдэхүүн хэсгүүд Next.js төслүүдэд зориулсан. Radix UI дээр суурилсан, Tailwind CSS-ээр загварчлагдсан, TypeScript-ээр бичигдсэн.

## 🚀 Суулгах

```bash
npm install bayanmunkh-ui-components
# эсвэл
yarn add bayanmunkh-ui-components
```

## 📦 Peer Dependencies

Эдгээр сангууд таны төсөл дээр суугаа байх шаардлагатай:

```bash
npm install react react-dom @radix-ui/react-alert-dialog @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-slot @radix-ui/react-toast lucide-react class-variance-authority
```

## 🎨 Тохиргоо

### 1. Tailwind CSS тохируулах

`tailwind.config.js` эсвэл `tailwind.config.ts`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/bayanmunkh-ui-components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 2. Toaster нэмэх (Toast notifications-д зориулсан)

Root layout эсвэл app дээрээ `Toaster` нэмнэ:

```typescript
// app/layout.tsx
import { Toaster } from "bayanmunkh-ui-components";

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

## 📖 Ашиглалт

### Button

```typescript
import { Button } from "bayanmunkh-ui-components";

function MyComponent() {
  return (
    <div>
      <Button variant="default">Анхдагч</Button>
      <Button variant="outline">Хүрээтэй</Button>
      <Button variant="ghost">Харагдахгүй</Button>
      <Button variant="destructive">Устгах</Button>
      <Button size="sm">Жижиг</Button>
      <Button size="lg">Том</Button>
      <Button loading>Уншиж байна...</Button>
    </div>
  );
}
```

### Input

```typescript
import { Input } from "bayanmunkh-ui-components";
import { Search } from "lucide-react";

function MyForm() {
  return (
    <div>
      <Input placeholder="Нэрээ оруулна уу" />
      <Input icon={<Search className="w-4 h-4" />} placeholder="Хайх..." />
    </div>
  );
}
```

### Checkbox

```typescript
import { Checkbox } from "bayanmunkh-ui-components";

function MyComponent() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Үйлчилгээний нөхцлийг зөвшөөрч байна</label>
    </div>
  );
}
```

### Dialog

```typescript
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
} from "bayanmunkh-ui-components";

function MyComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Цонх нээх</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Гарчиг</DialogTitle>
          <DialogDescription>Энд таны агуулга орно.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Хадгалах</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

### Alert Dialog

```typescript
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  Button,
} from "bayanmunkh-ui-components";

function MyComponent() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Устгах</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Та итгэлтэй байна уу?</AlertDialogTitle>
          <AlertDialogDescription>
            Энэ үйлдлийг буцаах боломжгүй.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Болих</AlertDialogCancel>
          <AlertDialogAction>Тийм, устга</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

### Delete Confirmation (Хялбаршуулсан)

```typescript
import { DeleteConfirmation, Button } from "bayanmunkh-ui-components";

function MyComponent() {
  const handleDelete = () => {
    console.log("Устгагдлаа!");
  };

  return (
    <DeleteConfirmation
      title="Өгөгдөл устгах уу?"
      description="Энэ үйлдлийг буцаах боломжгүй."
      onConfirm={handleDelete}
    >
      <Button variant="destructive">Устгах</Button>
    </DeleteConfirmation>
  );
}
```

### Select

```typescript
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "bayanmunkh-ui-components";

function MyComponent() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Сонгох" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Сонголт 1</SelectItem>
        <SelectItem value="option2">Сонголт 2</SelectItem>
        <SelectItem value="option3">Сонголт 3</SelectItem>
      </SelectContent>
    </Select>
  );
}
```

### Toast Notifications

```typescript
import { useToast, Button } from "bayanmunkh-ui-components";

function MyComponent() {
  const { toast, success, error, warning, info, loading } = useToast();

  return (
    <div className="space-x-2">
      <Button onClick={() => success("Амжилттай!")}>Success</Button>
      <Button onClick={() => error("Алдаа гарлаа!")}>Error</Button>
      <Button onClick={() => warning("Анхааруулга!")}>Warning</Button>
      <Button onClick={() => info("Мэдээлэл")}>Info</Button>
      <Button onClick={() => loading("Уншиж байна...")}>Loading</Button>
      <Button
        onClick={() =>
          toast({
            title: "Захидал",
            description: "Энд дэлгэрэнгүй мэдээлэл",
          })
        }
      >
        Custom
      </Button>
    </div>
  );
}
```

## 🎨 Component-ууд

| Component            | Тайлбар                                                           |
| -------------------- | ----------------------------------------------------------------- |
| `Button`             | Дарах товч (variants: default, outline, ghost, destructive, link) |
| `Input`              | Текст оруулах талбар (icon дэмждэг)                               |
| `Checkbox`           | Сонгох талбар                                                     |
| `Dialog`             | Modal цонх                                                        |
| `AlertDialog`        | Баталгаажуулах цонх                                               |
| `DeleteConfirmation` | Устгах баталгаажуулалт (AlertDialog-ийн wrapper)                  |
| `Select`             | Dropdown сонголт                                                  |
| `Toast`              | Notification мэдэгдэл                                             |
| `Toaster`            | Toast-уудыг харуулах container                                    |

## 🛠️ Хөгжүүлэлт

```bash
# Repository clone хийх
git clone https://github.com/your-username/bayanmunkh-ui-components.git

# Dependencies суулгах
cd bayanmunkh-ui-components
yarn install

# Build хийх
yarn build

# Local тест хийх
yarn link
cd ../your-project
yarn link bayanmunkh-ui-components
```

## 📝 Лиценз

MIT

## 🤝 Хувь нэмэр оруулах

Pull requests-ууд тавтай морилно уу! Том өөрчлөлтүүдийн хувьд эхлээд issue нээж, юу өөрчлөхийг хэлэлцээрэй.

## 👤 Зохиогч

Bayanmunkh

## 🔗 Холбоосууд

- [NPM Package](https://www.npmjs.com/package/bayanmunkh-ui-components)
- [GitHub Repository](https://github.com/Bayanmunkh20/bayanmunkh-ui-components)

## 🙏 Баярлалаа

- [Radix UI](https://www.radix-ui.com/) - Доод түвшний UI primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
