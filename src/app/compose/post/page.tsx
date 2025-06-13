import { PostCreationDialog } from "@/components/general/postCreationDialog/postCreationDialog";

const CreatePostPage = () => {
	return (
		<div className="flex justify-center items-start h-screen pt-10 bg-gray-100 dark:bg-gray-900">
			{/* PostCreationDialogを呼び出すが、モーダルではなくページの一部として表示 */}
			<div className="w-full max-w-2xl bg-white dark:bg-black rounded-lg shadow-xl">
				<PostCreationDialog />
			</div>
		</div>
	);
};
export default CreatePostPage;
