import Card from '@/components/Card';
import Button from '@/components/Button';
import React from 'react'

const landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            import React from 'react';

            <h1 className="text-2xl font-bold mb-4">Button Variants</h1>

            <div>
                <h2 className="font-semibold mb-2">Sizes</h2>
                <div className="flex gap-4">
                    <Button title="Small" styles="text-sm rounded-md" />
                    <Button title="Medium" styles="text-base rounded-md" />
                    <Button title="Large" styles="text-lg rounded-md" />
                </div>
            </div>

            <div>
                <h2 className="font-semibold mb-2">Shapes</h2>
                <div className="flex gap-4">
                    <Button title="Rounded Small" styles="rounded-sm" />
                    <Button title="Rounded Medium" styles="rounded-md" />
                    <Button title="Rounded Large" styles="rounded-lg" />
                    <Button title="Rounded Full" styles="rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default landing;

